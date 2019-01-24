import React from 'react';
import { Creatable } from 'react-select';

export class BwmSelectCreatable extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: [],
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        const { defaultValue, option } = this.props
        if (defaultValue.length > 0 ){
            this.initializeValue(defaultValue, option)
        }
    }
    
    onChange = (value) => {
        let newVal = value
        let stateVal = this.state.value

        if (value){
            if (value.value[0] === '#')
            {
                newVal.value = newVal.value.replace("#", "") ; 
                newVal.label = newVal.label.replace("#", "")
            } 

            stateVal.indexOf(newVal) === -1
            ? stateVal.push(newVal)
            : stateVal.length === 1
                ? (stateVal = [])
                : stateVal.splice(stateVal.indexOf(newVal), 1)

            this.setState({ value: stateVal })
            this.onSuccess(stateVal)   
            
        }
    }

    onSuccess(value){
        const {input: {onChange}} = this.props;
        onChange(value);
    }
    previewTags() {
        let div = []
        const { value } = this.state;
   
        for (let i = 0; i < value.length; i++) {
            div.push(
                <div  key={i} onClick={() => this.onChange(value[i])} className="tags">
                    #{value[i].label}
                </div>
            )
        }
        return div
    }

    initializeValue(defaultValue, option){
        for (var i = 0; i < defaultValue.length ; i++)
        {
            const resultat = this.findArray(option,defaultValue[i] )
            this.onChange(resultat)
        }
    }

    findArray(array, value){
        return array.find( key => key.value === value) 
    }
    render() {

        const { option } = this.props

        if (option.length > 1)
        {
            return (
                <div className="tags-div">
                    <Creatable
                        allowCreate={true}
                        options={option}
                        onChange={this.onChange}
                        value =""
                        id="Element"
                        multi
                        className="my-select"
                        
                    />
                    <div className="selected-tags">
                        {this.previewTags()}
                    </div>
                </div>
        
            )
        }
    }
}

