// Saudi Labor Law calculations used by the public calculators.
// The end-of-service rules mirror the tested engine in the Index HR product
// (api/src/utils/ksa/eosb.ts) so the website and the product agree.

const DAY_MS = 86400000

function addYearsClamped(d, n) {
  const year = d.getUTCFullYear() + n
  const month = d.getUTCMonth()
  const lastDay = new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  return new Date(Date.UTC(year, month, Math.min(d.getUTCDate(), lastDay)))
}

// Calendar years plus the fraction of the current year, so exactly five
// years lands on 5 and not 4.999 (which would change a resignation bracket).
export function serviceYearsBetween(hireDate, endDate) {
  if (endDate.getTime() <= hireDate.getTime()) return 0
  let years = endDate.getUTCFullYear() - hireDate.getUTCFullYear()
  let anniversary = addYearsClamped(hireDate, years)
  if (anniversary.getTime() > endDate.getTime()) {
    years -= 1
    anniversary = addYearsClamped(hireDate, years)
  }
  const next = addYearsClamped(hireDate, years + 1)
  return years + (endDate.getTime() - anniversary.getTime()) / (next.getTime() - anniversary.getTime())
}

// Articles 84, 85 and 87.
// leaverType: 'termination' | 'resignation' | 'resignation_full'
export function entitlementFactor(leaverType, years) {
  if (leaverType !== 'resignation') return 1
  if (years < 2) return 0
  if (years < 5) return 1 / 3
  if (years < 10) return 2 / 3
  return 1
}

export function computeEndOfService({ hireDate, endDate, monthlyWage, leaverType, unusedLeaveDays = 0 }) {
  const years = serviceYearsBetween(hireDate, endDate)
  const wage = Math.max(0, monthlyWage)
  const firstFive = Math.min(years, 5) * 0.5 * wage
  const beyondFive = Math.max(0, years - 5) * wage
  const gross = firstFive + beyondFive
  const factor = entitlementFactor(leaverType, years)
  const award = gross * factor
  // Unused annual leave is paid at the daily wage (month = 30 days).
  const leavePay = Math.max(0, unusedLeaveDays) * (wage / 30)
  return {
    years,
    serviceDays: Math.max(0, Math.floor((endDate - hireDate) / DAY_MS)),
    firstFive,
    beyondFive,
    gross,
    factor,
    award,
    leavePay,
    total: award + leavePay,
  }
}

// Article 107: the hourly wage plus 50% of the basic hourly wage, for each
// overtime hour. Hourly rates use a 30-day month of 8-hour days (240 hours).
export const MONTH_HOURS = 240

export function computeOvertime({ basic, allowances, hours }) {
  const fullHourly = (Math.max(0, basic) + Math.max(0, allowances)) / MONTH_HOURS
  const basicHourly = Math.max(0, basic) / MONTH_HOURS
  const perHour = fullHourly + basicHourly * 0.5
  return { fullHourly, basicHourly, perHour, total: perHour * Math.max(0, hours) }
}

export const fmtNumber = (n, digits = 2) =>
  Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: digits, maximumFractionDigits: digits })
