import React from 'react';
import OutputHeader from '../1st Level/OutputHeader';
import ActualOutput from '../1st Level/ActualOutput';

class OutputSection  extends React.Component {

   
render(){
    return (
        <div>
            <OutputHeader/>
            <ActualOutput input={this.state.phrases}/>
        </div>



    );
}}
export default OutputSection;

 