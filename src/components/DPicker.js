import React from 'react';
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/DPicker.css'

const DPicker = () => {
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.datepicker');
        let options = {
            yearRange: [2021, 2022],
            setDefaultDate: true,
            defaultDate: new Date(),
            minDate: new Date(),
            format: "ddd, d mmm",
            i18n: {
                months: [
                    'Січень',
                    'Лютий',
                    'Березень',
                    'Квітень',
                    'Травень',
                    'Червень',
                    'Липень',
                    'Серпень',
                    'Вересень',
                    'Жовтень',
                    'Листопад',
                    'Грудень'
                ],
                monthsShort: [
                    'Січ',
                    'Лют',
                    'Бер',
                    'Кві',
                    'Тра',
                    'Чер',
                    'Лип',
                    'Сер',
                    'Вер',
                    'Жов',
                    'Лис',
                    'Гру'
                ],
                weekdays: [
                    'Неділя',
                    'Понеділок',
                    'Вівторок',
                    'Середа',
                    'Четвер',
                    'П&#8217;ятниця',
                    'Субота'
                ],
                weekdaysShort: [
                    'Нд',
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб'
                ],
                weekdaysAbbrev: [
                    'Нд',
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб'
                ],
                cancel: "Cкасувати",
                done: "Ок"
            }

        }
        M.Datepicker.init(elems, options);
    });

    return (
        <div className="DPicker">
            <input type="text" className="datepicker"/>
        </div>
    );
};

export default DPicker;