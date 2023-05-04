interface Props {
    type: string;
};

const Main = ({ type }: Props) => {
    return (
        <main className="flex flex-col items-center justify-center flex-1 h-full px-20 py-20 text-center">
            <div className="z-10 p-4">
                <h1 className="text-9xl font-extrabold text-amber-50 mb-4 font-elden tracking-widest">Elden Ring
                </h1>
                <h2 className="text-4xl text-yellow-50 mb-4 font-mono tracking-widest">Mini wiki</h2>
            </div>
        </main>
    )
}

export default Main;