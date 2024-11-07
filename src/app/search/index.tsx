// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { Game } from '@/api';

// export default function SearchPage() {
//   const [games, setGames] = useState([]);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const search = searchParams.get('s') || "";
//       if (search) {
//         const gameCtrl = new Game();
//         const response = await gameCtrl.searchGames(search, 1);
//         setGames(response.data);
//         console.log('prueba',response.data);
//       }
//     };

//     fetchData();
    
//   }, [searchParams]);

//   return (
//     <div>
//     </div>
//   );
// }
