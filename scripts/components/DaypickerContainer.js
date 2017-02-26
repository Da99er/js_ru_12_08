import React, { Component, PropTypes } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

class DayPickerContainer extends Component {
    state = {
        day_from: null,
        day_to: null
    }

    render() {
        const { day_from, day_to } = this.state;
        return (
            <div className="RangeExample">
                {this.getRangeTirtle()}
                <DayPicker
                  ref="daypicker"
                  selectedDays={ [day_from, { from:day_from, to:day_to }] }
                  onDayClick={ this.handleDayClick }
                />
            </div>);
    }

    getRangeTirtle() {
        const { day_from, day_to } = this.state;
        if (!day_from && !day_to) {
            return <p>Please select the <strong>first day</strong>.</p>
        }

        if (day_from && !day_to) {
            return <p>Please select the <strong>last day</strong>.</p>
        }

        if (day_from && day_to) {
            return (<p>
                    You chose from { day_from.toDateString() } to { day_to.toDateString() }.
                    <a href="." onClick={ this.handleResetClick }>Reset</a>
                  </p>);
        }
    }

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, { from: this.state.day_from, to: this.state.day_to });
        console.log('@>', range)
        this.setState({
            day_from: range.from,
            day_to: range.to
        });
    }

    handleResetClick = (e) => {
        console.log('@>', e)
        e.preventDefault();
        this.setState({
            day_from: null,
            day_to: null,
        });
    }

}


export default DayPickerContainer;
