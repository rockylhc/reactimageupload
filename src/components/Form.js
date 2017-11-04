import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';
import Typography from 'material-ui/Typography';
import Dropzone from 'react-dropzone';
import CircularIndeterminate from './CircularIndeterminate';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import ImageCompare from './tools/ImageCompare';

class Form extends Component{
    constructor(props, context){
        super(props, context);
        this.state={guetzli:true}
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event, checked) {
        this.setState({guetzli: checked});
    }

    onDrop(files) {
        var file = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (data) => {

            this.props.actions.submitData({name:file.name, base64:data.target.result, guetzli:this.state.guetzli});
        };
    }

    render(){
        let {status, base64, classes} = this.props;
        console.log(this.props)
        return(
            <div>
                { status == 1 && <CircularIndeterminate {...this.props} />}
                { (status == 0 && base64) && <ImageCompare
                    srcOver={img1}
                    srcUnder={img2}
                />}

                <Dropzone onDrop={this.onDrop} activeClassName="onDrag" style={{}} activeStyle={{}}>
                    <Typography type="body1">Try dropping some files here, or click to select files to upload.</Typography>
                </Dropzone>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.guetzli}
                                onChange={this.handleChange}
                            />
                        }
                        label="Guetzli"
                    />
                </FormGroup>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(appActions, dispatch)
    }
}

function mapStateToProps(state, ownProps){

    return {
        base64 : state.app.base64,
        status: state.app.status
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);