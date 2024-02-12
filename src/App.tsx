import logo from './assets/books-icon.png';

export function App() {
    return (
        <div className="mx-auto max-w-6xl my-12 space-y-6">
            <img src={ logo } alt="books logo" className='max-w-20' />
            
            <form className="w-full ">
            <input 
                type="text" 
                placeholder='Busque em suas notas. . .'
                className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
            />
            </form>

            
            <div className='h-px bg-slate-700' />

            <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
                <div className='rounded-md bg-slate-700 p-5 space-y-3'>
                    <span className='text-sm font-medium text-slate-200'>
                        Adicionar nota
                    </span>
                    <p className='text-sm leading-6 text-slate-400'>
                        Grave uma nota em áudio que será convertido para texto automaticamente.
                    </p>
                </div>

                <div className='rounded-md bg-slate-800 '>

                </div>

                <div className='rounded-md bg-slate-800 '>

                </div>
            </div>
        </div>
    )
}

