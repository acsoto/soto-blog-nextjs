const Divider = ({ children }) => {
  if (children) {
    return (
      <div className="inline-flex w-full items-center justify-center">
        <hr className="my-5 h-px w-full border-0 bg-gray-200 dark:bg-gray-700" />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white">
          {children}
        </span>
      </div>
    )
  }
  return <hr className="my-5 h-px border-0 bg-gray-200 dark:bg-gray-700" />
}

export default Divider
