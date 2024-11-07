

function Profile({name, image}) {
    return ( 
        <div className="flex justify-between items-center" style={{marginTop:'1%'}}>
            <div>
                <div className="flex items-center gap-x-2">
                    <div className="w-10 h-10 border-2 border-white bg-black rounded-full"></div>
                    <p className="italic">{name}</p>
                </div>
                <div className="mt-2 flex gap-x-4 text-sm">
                    <div className="flex gap-x-1 items-center">
                        <div className="bg-red-600 w-3 h-3 "></div>
                        <p>Direction de communication</p>
                    </div>
                    <div className="flex gap-x-1 items-center">
                        <div className="bg-red-800 w-3 h-3 "></div>
                        <p>Interface utilisateur</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-4">
                <div className="bg-red-500 w-6 h-6 "></div>
                <p className="italic">Déconnexion</p>
            </div>
        </div>

    );
}

export default Profile;