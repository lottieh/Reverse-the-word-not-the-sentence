import React from 'react';
import InputTitle from '../1st Level/InputTitle';
class InputSection  extends React.Component {

    submitClicked = () =>{
alert('clicked')
this.props.outputFunc(this.props.description)
// .split(" ").split("").reverse().join("")

    }
render(){
    return (
        <div>
            <InputTitle />

            <div  >
                {/*Input Box*/}

            </div>
            <input
                className="field Col-8"
                type="text"
                // onChange={}
                name="task"
                placeholder="Enter your phrase here" />

            <br></br>

            <small id="taskHelp" className="form-text text-muted">
                This must only contain lowercase letters and spaces.
                    </small>

            {/*Submit button*/}

            <div className="col-12 col-md-2">
                <input className ="field2" type="submit" value="Reverse"

                    onClick={this.submitClicked}
                />


            </div>

        </div>



    );
}}
export default InputSection;

