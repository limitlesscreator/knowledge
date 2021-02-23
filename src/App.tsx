import React from 'react';
import logo from './logo.svg';
import './App.css';
import {tester} from "./Functions/script-1";


function App() {
    return (
        <div className="App">
            <div className="title">
                <div className="question">3 метода функции </div>
                <div className="answer">apply , bind, call</div>
                <div className="margin"></div>
            </div>
            <div className="title">
                <div className="question">Что такое рекурсия </div>
                <div className="answer">это функция которая вызывает саму себя и она должна содержать выход. Для чего нужна рекурсия? – например для древовидных структур, например нам надо пройтись по папкам и напечатать название папок и файлов.</div>
                <div className="margin"></div>
            </div>
            <div className="title">
                <div className="question">Что такое HOC?</div>
                <div className="answer">Higher-Order Component – это функция которая на входе принимает одну компоненту , а выкидывает эту же компоненту но обёрнутую в какую-то другую контейнерную компоненту. Зачем это нужно? Для того чтобы переиспользовать логику, чтобы не дублировать код.</div>
                <div className="margin"></div>
            </div>
            <div className="title">
                <div className="question">Два правила Хуков</div>
                <div className="answer">хуки можно использовать только внутри функциональных компонент либо в других кастомных хуков.  Хук нельзя использовать в if else в циклах и внутри функций</div>
                <div className="margin"></div>
            </div>

        </div>
    );
}

export default App;
