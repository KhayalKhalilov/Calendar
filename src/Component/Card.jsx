import React, { Component } from 'react'

export class Card extends Component {
    state = {
        Month: [],
        NewMonth: [],
        DefaultMonth: [],
        Mon: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        TodayMonth: '',
        TodayYear: '',
        Mon1: '',
        ChangeMon: "",
        TodayDay:''
    }

    changeYear = (c, d) => {
        this.setState({ NewMonth: [], DefaultMonth: [] })
        let changeYears = this.state.TodayYear
        if (c == "pre") {
            changeYears--
            this.setState({ TodayYear: changeYears })
        } else if (c == "next") {
            changeYears++
            this.setState({ TodayYear: changeYears })
        }
        let t = new Date(changeYears, this.state.ChangeMon, 0).getDate()
        for (let i = 1; i <= t; i++) {

            let abc = new Date(`${this.state.ChangeMon},${i},${changeYears}`).getDay()
            if (abc == 1) {
                let a = {
                    week: "Mo",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 2) {
                let a = {
                    week: "Tu",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 3) {
                let a = {
                    week: "We",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 4) {
                let a = {
                    week: "Th",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 5) {
                let a = {
                    week: "Fr",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 6) {
                let a = {
                    week: "Sa",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 0) {
                let a = {
                    week: "Su",
                    day: i
                }
                this.state.NewMonth.push(a)
            }
        }
        this.setState({ DefaultMonth: this.state.NewMonth, Mon1: this.state.Mon[this.state.ChangeMon - 1] })
    }

    changeMonth = (a, e) => {
        this.setState({ NewMonth: [], DefaultMonth: [] })
        let change = this.state.ChangeMon
        if (a == "pre") {
            change--
            this.setState({ ChangeMon: change })
            if (change == 0) {
                change = 12
                this.setState({ ChangeMon: change, TodayYear: this.state.TodayYear - 1 })
            }
        } else if (a == "next") {
            change++
            this.setState({ ChangeMon: change })
            if (change == 13) {
                change = 1
                this.setState({ ChangeMon: change, TodayYear: this.state.TodayYear + 1 })
            }
        }
        this.setState({ ChangeMon: change })
        let c = new Date(this.state.TodayYear, change, 0).getDate()

        for (let i = 1; i <= c; i++) {

            let abc = new Date(`${change},${i},${this.state.TodayYear}`).getDay()
            if (abc == 1) {
                let a = {
                    week: "Mo",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 2) {
                let a = {
                    week: "Tu",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 3) {
                let a = {
                    week: "We",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 4) {
                let a = {
                    week: "Th",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 5) {
                let a = {
                    week: "Fr",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 6) {
                let a = {
                    week: "Sa",
                    day: i
                }
                this.state.NewMonth.push(a)
            } else if (abc == 0) {
                let a = {
                    week: "Su",
                    day: i
                }
                this.state.NewMonth.push(a)
            }
        }
        this.setState({ DefaultMonth: this.state.NewMonth, Mon1: this.state.Mon[change - 1] })

    }


    componentDidMount = () => {
        let todayMonth = new Date().getMonth() + 1
        let todayYear = new Date().getFullYear()
        this.setState({
            TodayMonth: todayMonth,
            TodayYear: todayYear,
            ChangeMon: todayMonth
        })
        let a = new Date(todayYear, todayMonth, 0).getDate()
        this.setState({ Mon1: this.state.Mon[todayMonth - 1] })
        
        let todayDay=new Date().getDate()
        this.setState({TodayDay:todayDay})

        for (let i = 1; i <= a; i++) {
            let abc = new Date(`${todayMonth},${i},${todayYear}`).getDay()
            if (abc == 1) {
                let a = {
                    week: "Mo",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 2) {
                let a = {
                    week: "Tu",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 3) {
                let a = {
                    week: "We",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 4) {
                let a = {
                    week: "Th",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 5) {
                let a = {
                    week: "Fr",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 6) {
                let a = {
                    week: "Sa",
                    day: i
                }
                this.state.Month.push(a)
            } else if (abc == 0) {
                let a = {
                    week: "Su",
                    day: i
                }
                this.state.Month.push(a)
            }
        }
        this.setState({ DefaultMonth: this.state.Month })
    }
    render() {
        const { DefaultMonth, Mon, Mon1, Month, TodayYear,TodayDay } = this.state
        return (
            <div>
                
                <div className='input'>
                <div className='inputs'>  <i className="fa-solid fa-circle-chevron-left" onClick={this.changeYear.bind(this, "pre")}></i><h2>{TodayYear}</h2> <i className="fa-solid fa-circle-chevron-right" onClick={this.changeYear.bind(this, "next")}></i></div>
                <div className='inputs'>  <i className="fa-solid fa-circle-chevron-left" onClick={this.changeMonth.bind(this, "pre")}></i><h2 className='year'>{Mon1}</h2> <i className="fa-solid fa-circle-chevron-right" onClick={this.changeMonth.bind(this, "next")}></i></div>
                </div>
                <div className='calendar'>
                    {

                        DefaultMonth.map(e => {
                            if (e.week == "Su") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "Sa") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "Fr") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "Th") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "We") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "Tu") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            } else if (e.week == "Mo") {
                                if(TodayDay==e.day){
                                    return (
                                        <p key={e.day} className={e.week}><span>{e.week}</span><b className='today'>{e.day}</b></p>
                                    )
                                }
                                else{
                                    return (
                                    <p key={e.day} className={e.week}><span>{e.week}</span><b>{e.day}</b></p>
                                )
                                }
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Card
