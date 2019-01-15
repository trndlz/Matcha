import React from 'react';
import * as actions from 'actions';

export class BwmFileUpload extends React.Component {
    
    constructor(){
        super();

        this.setupReader()

        this.state = {
            selectedFile: undefined,
            imageBase64: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    setupReader(){
        this.reader = new FileReader();

        this.reader.addEventListener('load', (event) => {
            this.setState({imageBase64: event.target.result});
        });
    }
    onChange(event) {
    
        const selectedFile = event.target.files[0];
        if (selectedFile){
            this.setState({
                selectedFile
            });

            this.reader.readAsDataURL(selectedFile);
        }
    }

    onError(error){

    }

    onSucces(uploadedImage){
        const {input: {onChange}} = this.props;
        onChange(uploadedImage);
    }

    uploadImage() {
        const { selectedFile } = this.state;

        if (selectedFile){
            actions.uploadImage(selectedFile).then(
                (uploadedImage) => { this.onSucces(uploadedImage)},
                (error) => { this.onError(error)})
        }
    }

    render() {
        const {label, meta: {touched, error}} = this.props;
        const { selectedFile, imageBase64 } = this.state;

        return (
            <div className='img-upload-container'>
                <label className="img-upload btn btn-bwm">
                    <span className='upload-text'>Select an image </span>
                    <input type='file'
                            accept='.jpg, .png, .jpeg, .gif'
                            onChange={this.onChange} />
                </label>
                { selectedFile &&
                    <button className ='btn btn-success btn-upload'
                            type = 'button'
                            disabled={!selectedFile}
                            onClick={() =>this.uploadImage()}>
                        Upload Image
                    </button>

                }

                { touched &&
                    ((error && <div className='alert alert-danger'>{error}</div>))
                }

                { imageBase64 &&
                    <div className='img-preview-container'>
                        <div className='img-preview' style={{'backgroundImage' : 'url(' + imageBase64 + ')'}}>
                        </div>
                    </div>
                }
            </div>
        )
    }
    // render() {
    //     const {label, meta: {touched, error}} = this.props;

    //     return (
    //         <div className='form-group'>
    //             <label>{label}</label>
    //             <div className='input-group'>
    //                 <input  type='file'
    //                         accept='.jpg, .png, .jpeg, .gif'
    //                         onChange={this.onChange} />
    //             </div>
    //             {touched &&
    //                 ((error && <div className='alert alert-danger'>{error}</div>))}
    //         </div>
    //     )
    // }
}