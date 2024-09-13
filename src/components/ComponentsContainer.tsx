import {Area, AreaProps} from './Area';


type ContainterComponents<T> = T & 
{
    /** Обертка компонента*/
    Area: React.FC<AreaProps>
};

/** Добавляет компонент Area(обертка) к списку компонентов */
export default function CreateContainer<T>  (children:T) : ContainterComponents<T>
{ 
    return { Area, ...children};
}
