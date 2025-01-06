interface CMSIconProps {
  icon: string
  className?: string
}

const CMSIcon = ({ icon, className }: CMSIconProps) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<i class="${className}">${icon}</i>`
      }}
    />
  )
}

export { CMSIcon }
