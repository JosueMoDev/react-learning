import { WhiteCard } from '../../components';
import { BearFamily, useBearStore } from '../../stores';

export const BearPage = () => {
  const blackBears = useBearStore( state => state.blackBears);
  const pandaBears = useBearStore((state) => state.pandaBears);
  const polarBears = useBearStore((state) => state.polarBears);

  const increaseBearsPolulation = useBearStore((state) => state.increaseBearsPopulation);


  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <WhiteCard centered>
          <h2>Osos Negros</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBearsPolulation(+1, BearFamily.black)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
            <button onClick={() => increaseBearsPolulation(-1, BearFamily.black)}>-1</button>
          </div>
        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Polares</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBearsPolulation(+1, BearFamily.polar)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10">{polarBears}</span>
            <button onClick={() => increaseBearsPolulation(-1, BearFamily.polar)}>-1</button>
          </div>
        </WhiteCard>

        <WhiteCard centered>
          <h2>Osos Pandas</h2>

           <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBearsPolulation(+1, BearFamily.panda)}> +1</button>
            <span className="text-3xl mx-2 lg:mx-10">{pandaBears}</span>
            <button onClick={() => increaseBearsPolulation(-1, BearFamily.panda)}>-1</button>
          </div>
        </WhiteCard>
      </div>
    </>
  );
};