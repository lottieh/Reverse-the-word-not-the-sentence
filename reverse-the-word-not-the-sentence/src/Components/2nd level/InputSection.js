import React from 'react';
import InputTitle from '../1st Level/InputTitle';
function InputSection() {
    
    return (
    <div >
                <InputTitle/>

                           <div  >

                    <input
                    className="field Col-8"
                        type="text"
                        // onChange={this.taskDescriptionEntered}
                        name="task"
                        placeholder="Enter your phrase here" />
<br></br>
                    <small id="taskHelp" className="form-text text-muted">
                        This must only contain lowercase letters and spaces.
                    </small>
                </div>
                </div>
           
      

    );
  }
export default InputSection;

