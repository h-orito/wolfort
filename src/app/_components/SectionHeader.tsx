type Props = {
  number: string
  label: string
  children: React.ReactNode
}

export default function SectionHeader({ number, label, children }: Props) {
  return (
    <div className='w-full'>
      <div className='flex items-baseline font-mono text-[10px] uppercase tracking-[0.3em] text-muted md:text-xs'>
        <span className='text-accent'>[{number}]</span>
        <span className='ml-3 text-moon'>{label}</span>
      </div>
      <hr className='hairline mt-3' />
      <h2 className='display-section mt-8 font-display text-4xl leading-[1.05] text-bone md:text-6xl'>
        {children}
      </h2>
    </div>
  )
}
