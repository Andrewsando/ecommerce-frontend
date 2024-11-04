
// import { Platform, Game } from "@/api";
// import PlatformPage from "./page";

// export default async function PlatformServer({ params, searchParams }: {
//     params: { platform: string };
//     searchParams: { id: string; query: string }
// }) {
//     const { platform } = params;
//     const page = 1;

//     const platformCtrl = new Platform();
//     const responsePlatform = await platformCtrl.getBySlug(platform);
//     console.log({ responsePlatform });

//     const gameCtrl = new Game();
//     const responseGame = await gameCtrl.getGamesByPlatformSlug(platform, page);

//     const pagination = responseGame.meta.pagination;
//     const games = responseGame.data;
//     const platformInfo = responsePlatform.data;



//     // return (
//     //     <PlatformPage
//     //         pagination={pagination}
//     //         games={games}
//     //         platformInfo={platformInfo}
//     //     />
//     // );
// }

// // interface PlatformPageProps {
// //   pagination: any;
// //   games: any[];
// //   platformInfo: any;
// // }

// // export default function PlatformPage({ pagination, games, platformInfo }: PlatformPageProps) {


// //   const hasProducts = size(games) > 0;

// return (
//     <BasicLayout relative>
//         <Container>
//             <Separator height={50} />
//             <h2>{platformInfo}</h2>
//             {hasProducts ? (
//                 games.map((game) => (
//                     <div key={game.id}>
//                         <p>{game.attributes.title}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No games found for this platform.</p>
//             )}
//         </Container>
//     </BasicLayout>
// );
// }
