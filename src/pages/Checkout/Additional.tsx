const Additional = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-bold fluid-text-2xl"> Additional Information </h2>
        <div className="flex flex-wrap justify-between text-sm">
          <span> Need something else? We will make it for you </span>
          <span> Step 4 of 5 </span>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="font-bold">Order notes</span>
        <textarea
          className="h-24 min-h-12 rounded-xl border border-gray-300  bg-gray-100 p-2 dark:bg-white"
          placeholder="Need a specific delivery day? Sending a gift? Let's say ..."
        />
      </div>
    </section>
  )
}

export default Additional
