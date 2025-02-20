function LogoSvg ({ className, colors }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.17 83.93" className={className}>
      <path
        d="M71.07 31.49 39.12 8.06c-1.58-1.15-4.17-1.16-5.76-.02L1.17 31.25c-.06.04-.12.09-.18.14-.64.53-.99 1.2-.99 1.9v47.76c0 1.59 1.81 2.89 4.04 2.89h64.43c2.23 0 4.04-1.29 4.04-2.89V33.74c0-.72-.38-1.42-1.06-1.95l-.37-.29Z"
        className={colors?.homeBack || 'fill-emerald-400/30'}
      />
      <path
        d="M78.74 24.3 46.78.87C45.2-.28 42.61-.29 41.02.85L8.83 24.05c-.06.04-.12.09-.18.14-.64.53-.99 1.2-.99 1.9v47.76c0 1.59 1.81 2.89 4.04 2.89h64.43c2.23 0 4.04-1.29 4.04-2.89V26.54c0-.72-.38-1.42-1.06-1.95l-.37-.29Z"
        className={colors?.homeFront || 'fill-blue-500'}
      />
      <path
        d="M64.77 38.64 41.06 62.36 26.94 48.23l5.85-5.87 8.27 8.25L58.9 32.78l5.87 5.86z"
        className={colors?.check || 'fill-white'}
      />
    </svg>
  )
}
export default LogoSvg