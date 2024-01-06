import Image from 'next/image';


export default function Id(props) {
  async function Dataa() {
    const data = await fetch(`https://dummyjson.com/products/${props.params.id}`);
    const x = await data.json();

    return (
      <div className='grid grid-flow-row my-8'>
        <div className='text-5xl font-bold'>
          NAME: <span className='bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-orange-500'>{x.title}</span>
        </div>
        <div className='text-3xl my-2'>
          TYPE: <span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-lime-500'>{x.brand}</span>
        </div>
        <div className='text-2xl relative h-80'>
          <Image src={x.thumbnail} className='rounded-3xl object-contain border-2 py-5' fill={true} alt='l' />
          <div className='relative lg:top-[-50px] border ring-green-600 ring-1 bg-green-500 rounded-lg lg:left-[90%] w-max'>
            PRICE: {x.price} $
          </div>
        </div>
        <div className='flex flex-auto justify-between gap-10 relative h-50'>
          {x.images.map((item, index) => (
            <Image key={index} src={item} className='rounded-3xl bg-contain py-5' width={100} height={100} alt='l' />
          ))}
        </div>
        <div className='text-2xl columns-2 text-justify'>{x.description}Exercitation quis laboris laboris culpa qui irure velit proident irure eiusmod fugiat anim cupidatat esse.Occaecat commodo sunt pariatur veniam veniam voluptate fugiat dolor ex dolore in.Id sint irure excepteur nostrud qui est eiusmod ullamco veniam irure cillum id ad amet.Magna cillum nulla nisi aliqua irure Lorem nulla adipisicing eiusmod sint magna.Enim nulla irure nisi exercitation deserunt ad esse deserunt esse est id.Ullamco sunt occaecat sunt officia dolore nostrud id anim laboris ad laborum excepteur non.Reprehenderit mollit incididunt sunt duis proident commodo ad elit.Culpa ea deserunt adipisicing commodo non pariatur consequat labore.Eu voluptate eu consectetur ullamco sint nostrud.Et qui do sint mollit sint est sit mollit aute sint commodo.Enim cupidatat qui aliqua non consequat sunt proident cupidatat eiusmod.Aliqua elit ex sint ex esse incididunt.Pariatur magna velit proident consectetur magna laborum et cupidatat culpa magna.Sit deserunt cupidatat veniam culpa mollit est cupidatat do laboris dolor irure est officia laboris.Mollit reprehenderit non consectetur aliqua ex tempor.Sit consequat voluptate officia ut commodo fugiat nisi laborum duis cupidatat ea laborum pariatur nisi.Non tempor eiusmod tempor irure qui.Sit magna sit ea dolore id excepteur commodo ullamco proident culpa.Aute velit incididunt ea adipisicing culpa anim ea.Nostrud enim nostrud exercitation dolor fugiat id quis qui irure sit non excepteur.</div>
        <button className='border-2 rounded-3xl mode bg-gradient-to-tr from-orange-400 via-stone-700 to-green-500 my-5'>BUY</button>
       </div>
    );
  }

  return (
    <div className='container mx-50 px-80'>
      <Dataa />
    </div>
  );
}
