import React from 'react'

export type SectionWithGridProps = {
  children?: React.ReactNode,
  cols?: number,
  evenClass?: string,
  oddClass?: string,
  gradientClass?: string,
  className?: string,
  sidePaddingPercent?: number, // left/right padding in percent
  gridGapClass?: string, // tailwind gap class like 'gap-x-2'
  gradientInside?: boolean, // if true, gradient is confined to padded area
}

export default function SectionWithGrid({
  children,
  cols = 23,
  evenClass = 'bg-red-100',
  oddClass = 'bg-stone-100',
  gradientClass = '',
  gridGapClass = '',
  className = '',
  sidePaddingPercent = 0,
  gradientInside = true,
}: SectionWithGridProps) {
  const gridClass = cols === 23 ? 'grid-cols-23' : 'grid-cols-12'

  const offsetStyle = sidePaddingPercent
    ? ({ left: `${sidePaddingPercent}%`, right: `${sidePaddingPercent}%` } as React.CSSProperties)
    : undefined

  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-y-0" style={offsetStyle}>
          <div className={`h-full w-full grid ${gridClass} ${gridGapClass}`}>
            {Array.from({ length: cols }).map((_, i) => (
              <div key={i} className={`h-full ${i % 2 === 0 ? evenClass : oddClass}`} />
            ))}
          </div>
        </div>
      </div>

      {gradientClass ? (
        <div aria-hidden={true} className="absolute inset-0 z-0 pointer-events-none">
          {gradientInside ? (
            <div className="absolute inset-y-0" style={offsetStyle}>
              <div className={`${gradientClass} h-full w-full`} />
            </div>
          ) : (
            <div className={`${gradientClass} absolute inset-0 h-full w-full`} />
          )}
        </div>
      ) : null}

      <div className="relative z-10">{children}</div>
    </div>
  )
}
