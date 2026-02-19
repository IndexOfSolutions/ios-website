import React from 'react'

export const BoxLightEffet = ({ direction }) => {
    return (
        direction === "left" ? (
            <svg width="500" height="470" viewBox="0 0 435 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_72_2)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="25" y="60" width="350" height="350" fill="url(#paint0_linear_72_2)" />
                </g>
                <g filter="url(#filter1_f_72_2)" style={{ mixBlendMode: "plus-lighter" }}>
                    <rect x="25" y="60" width="350" height="350" fill="url(#paint1_linear_72_2)" />
                </g>
                <defs>
                    <filter id="filter0_f_72_2" x="-35" y="0" width="470" height="470" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_72_2" />
                    </filter>
                    <filter id="filter1_f_72_2" x="-5" y="30" width="410" height="410" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_72_2" />
                    </filter>
                    <linearGradient id="paint0_linear_72_2" x1="25" y1="235" x2="375" y2="235" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18181B" />
                        <stop offset="0.100962" stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_72_2" x1="25" y1="235" x2="375" y2="235" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18181B" />
                        <stop offset="0.100962" stopColor="#6EA1F5" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ) : (
            <svg width="500" height="470" viewBox="0 0 435 470" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                    <rect width="350" height="350" transform="matrix(-1 0 0 1 410 60)" fill="url(#paint0_linear_0_1)" />
                </g>
                <g filter="url(#filter1_f_0_1)" style={{mixBlendMode: "plus-lighter"}}>
                    <rect width="350" height="350" transform="matrix(-1 0 0 1 410 60)" fill="url(#paint1_linear_0_1)" />
                </g>
                <defs>
                    <filter id="filter0_f_0_1" x="0" y="0" width="470" height="470" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_0_1" />
                    </filter>
                    <filter id="filter1_f_0_1" x="30" y="30" width="410" height="410" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_0_1" />
                    </filter>
                    <linearGradient id="paint0_linear_0_1" x1="0" y1="175" x2="350" y2="175" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18181B" />
                        <stop offset="0.100962" stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_0_1" x1="0" y1="175" x2="350" y2="175" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#18181B" />
                        <stop offset="0.100962" stopColor="#6EA1F5" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        )
    )
}
