export default function Button({ label, children, ...props }) {
    
    return (
        <button {...props} className="bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 p-2">
            {label}
            {children}
        </button>
    )
}