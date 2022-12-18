export default function SearchBar() {
  // Turn these into objects eventually
  return (
    <div className="align-center container mx-auto flex-1 flex-col justify-center p-2">
      <form>
        <input
          type="text"
          value="Search (Coming Soon)"
          disabled
          class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm
      invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none
      focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      disabled:border-slate-200 disabled:bg-slate-50
      disabled:text-slate-500 disabled:shadow-none"
        />
      </form>
    </div>
  );
}
