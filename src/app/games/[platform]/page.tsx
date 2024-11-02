import { Platform, Game } from "@/api"

export default async function PlatformPage({ params, searchParams }: 
    {
    params: Promise<{ platform: string }>,
    searchParams: {id:string, query:string}
  }){
    const {platform} = await params
    const page = 1

    const platformCtrl = new Platform();
    const responsePlatform = await platformCtrl.getBySlug(platform)
console.log('leropii',responsePlatform);
    
    const gameCtrl = new Game();
    const responseGame = await gameCtrl.getGamesByPlatformSlug(platform, page )
    const pagination = responseGame.meta.pagination 
    
console.log('lerop',responseGame.data);

    return (
        <div>
            <h2>{platform}</h2>
            <p>{JSON.stringify(searchParams)}</p>
        </div>
    );
}