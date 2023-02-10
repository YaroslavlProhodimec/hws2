import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType
* 2 - указать нужный тип для defaultAffairs
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами
* 4 - выполнить пункт 3 для функции deleteAffair
* 5 - указать нужный тип в useState с affairs
* 6 - дописать тип и логику функции deleteAffairCallback
* 7 - в файле Affairs.tsx дописать типизацию пропсов
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
export type AffairPriorityType = 'low' | 'middle' |  'high'// need to fix any
export type AffairType = {
    _id: number // need to fix any
    name: string // need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: any, filter: FilterType): any => { // need to fix any
   let  partfilter = affairs
    if(filter === 'all') {
        partfilter = affairs.filter( true )
    }
    if(filter === 'high') {
       partfilter = affairs.filter((a: { priority: string }) => a.priority === 'high' )
    }
    if(filter === 'middle') {
         partfilter =   affairs.filter((a: { priority: string }) => a.priority === 'middle' )
    }
    if(filter === 'low') {
         partfilter =  affairs.filter((a: { priority: string }) => a.priority === 'low' )
    }
    //если пришел фильтр "all"...может нам вообще не фильтровать, а вернуть все?
    //а вот если пришло другое значение...

    return  partfilter  // need to fix
}
export const deleteAffair = (affairs: any, _id: number): any => { // need to fix any
    let partDelete = affairs.filter((a: { _id: number }) => a._id !== _id)
    // need to fix
    // отбрасывай при помощи метода filter лишних affairs
    return partDelete
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => { // need to fix any


        setAffairs(deleteAffair(affairs,_id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    filter={filter}          // ого useState передаем!
                    setFilter={setFilter}    // ого useState передаем!
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
