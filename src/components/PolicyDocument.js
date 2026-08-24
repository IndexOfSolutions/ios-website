import React from 'react'
import Link from 'next/link'

/**
 * Shared renderer for the privacy policy documents.
 *
 * Sections are numbered automatically, and every document ends with the same
 * "Support and Contact" + "Updates to This Policy" pair, so individual policies
 * only describe what is specific to them. Policy content lives in
 * `src/constants/privacyPolicies.js`.
 */

// Turns **bolded** phrases inside a string into <strong> elements.
const RichText = ({ text }) =>
  text.split(/\*\*(.+?)\*\*/g).map((chunk, i) =>
    i % 2 === 1 ? <strong key={i}>{chunk}</strong> : <React.Fragment key={i}>{chunk}</React.Fragment>
  )

const Block = ({ block }) => {
  switch (block.type) {
    case 'lead':
      return (
        <p className="mb-4 font-medium">
          <RichText text={block.text} />
        </p>
      )
    case 'label':
      return <p className="font-semibold text-primary mb-2">{block.text}</p>
    case 'ul':
      return (
        <ul className="list-disc ml-6 mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      )
    case 'cards':
      return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {block.items.map((item, i) => (
            <li key={i} className="p-4 border border-border-color rounded-lg shadow-sm text-sm">
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ul>
      )
    default:
      return (
        <p className="mb-4 last:mb-0">
          <RichText text={block.text} />
        </p>
      )
  }
}

const Section = ({ number, heading, children }) => (
  <section>
    <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
      <span className="mr-2">{number}.</span> {heading}
    </h2>
    {children}
  </section>
)

export const ContactSection = ({ number, note }) => (
  <section className="border-l-4 border-primary p-6">
    <h2 className="text-xl font-bold text-primary mb-4">{number}. Support and Contact</h2>
    {note ? <p className="mb-4">{note}</p> : null}
    <div className="space-y-2 italic">
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:y.nasser@indexofsolutions.com" className="text-primary hover:underline">
          y.nasser@indexofsolutions.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong>{' '}
        <a href="tel:+9613865174" className="text-primary hover:underline">
          +961 3 865 174
        </a>
      </p>
      <p>
        <strong>Website:</strong>{' '}
        <a
          href="https://www.indexofsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          www.indexofsolutions.com
        </a>
      </p>
      <p>
        <strong>Address:</strong> Cornish al Mazraa, Sabbah Center, Block B, 2nd Floor, Beirut, Lebanon
      </p>
    </div>
  </section>
)

export const PolicyDocument = ({ policy }) => {
  const sectionCount = policy.sections.length

  return (
    <div className="max-w-4xl mx-auto px-4 py-32 font-sans text-fg leading-relaxed">
      <header className="border-b-2 border-primary pb-8 mb-10">
        <Link href="/privacy-policy" className="text-sm text-primary hover:underline">
          ← All privacy policies
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-primary mt-4 mb-4">{policy.title}</h1>
        <p className="text-sm text-fg italic">
          Last updated: <time dateTime={policy.lastUpdatedISO}>{policy.lastUpdated}</time>
        </p>
      </header>

      <div className="space-y-10">
        {policy.sections.map((section, i) => (
          <Section key={section.heading} number={i + 1} heading={section.heading}>
            {section.blocks.map((block, j) => (
              <Block key={j} block={block} />
            ))}
          </Section>
        ))}

        <ContactSection number={sectionCount + 1} note={policy.supportNote} />

        <Section number={sectionCount + 2} heading="Updates to This Policy">
          <p>
            We may update this Privacy Policy periodically to reflect legal, technical, or operational
            changes. The updated version will always be available on our website.
          </p>
        </Section>
      </div>
    </div>
  )
}
