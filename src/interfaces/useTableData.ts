import { ref } from 'vue'

export function useTableData(){
    const TableData = ref<ITableData[]>(
        [
            {
                name: "Елена Петровская",
                email:"helena@gmail.com",
                status:"Активный",
                statusColor:"green",
                inn:"12334665557",
                country:"Резидентство РФ"
            },
            {
                name: "Андрей Петров",
                email:"andrew@gmail.com",
                status:"Подача заявки",
                statusColor:"yellow",
                inn:"18787878665557",
                country:"Резидентство РФ"
            },
            {
                name: "Лида Серова",
                email:"lida@gmail.com",
                status:"Отключён",
                statusColor:"red",
                inn:"144448665557",
                country:"Резидентство РФ"
            }
        ]
    );
    return {TableData};
}