import img1 from '.././../assets/1.png'
import img2 from '.././../assets/2.png'
import img3 from '.././../assets/3.png'
import { FaArrowRightLong } from "react-icons/fa6";


interface LatestSpending {
    name: string;
    image: string; // Ini bisa berupa URL gambar atau path lokal gambar
    time: string; // Bisa berupa string waktu dalam format tertentu (misalnya: "08:30 AM")
    date: string; // Bisa berupa string tanggal dalam format tertentu (misalnya: "2023-12-20")
  }
  
  const latestSpendings: LatestSpending[] = [
    {
      name: "Belanja Bahan Makanan",
      image: img1,
      time: "08:30 AM",
      date: "2023-12-20",
    },
    {
      name: "Pembayaran Tagihan Listrik",
      image: img2,
      time: "10:45 AM",
      date: "2023-12-19",
    },
    {
      name: "Pembayaran Tagihan Listrik",
      image: img3,
      time: "10:45 AM",
      date: "2023-12-19",
    },
  ];

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", options);
  };
  

function LatestSpending() {
  return (
    <div className='my-5 mx-3 border-2 rounded-xl p-4'>
        <h3 className='font-bold'>Latest spending</h3>
        <div className='mt-5'>
            {latestSpendings.map((item, index) =>(
                <div key={index}  className='flex gap-3 border-b-2 p-2'>
                    <img src={item.image}/>
                    <div>
                        <h2 className='font-bold'>{item.name}</h2>
                        <p className='text-[#d9dddf] text-sm'>{formatDate(item.date)} {item.time}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-center mt-3 items-center text-[#545de6] gap-2'>
            <a className='cursor-pointer'>View All</a>
            <FaArrowRightLong/>
        </div>
    </div>
  )
}

export default LatestSpending