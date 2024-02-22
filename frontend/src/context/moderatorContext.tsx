import React, { createContext, useState } from 'react';

type ModProp ={
    isMod: boolean;
    showMod: Function;
}

export const ModContext = createContext<ModProp>({isMod: false, showMod: () => {}});

export const ModProvider : React.FC<{ children: React.ReactNode }> = ( {children} ) => {
    const [isMod, setIsMod] = useState<boolean>(true);
    console.log(isMod);
    function showMod(mod: boolean){
        setIsMod(mod);
        console.log(mod);
    }
    return (
        <ModContext.Provider value={{ isMod, showMod }}>
            {children}
        </ModContext.Provider>
    );
};