import logo from './assets/books-icon.png';

export function App() {
    return (
        <div className="mx-auto max-w-6xl my-12">
            <img src={ logo } alt="books logo" className='max-w-20' />
            
            <form className="w-full">
            <input 
                type="text" 
                placeholder='Busque em suas notas. . .'
                className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
            />
            </form>
        </div>
    )
}

