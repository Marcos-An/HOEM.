import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

export default class Galery extends Component{
    constructor(props){
      super(props);
      this.state = {
        images : []
      }
    }
    componentDidMount(){
      const { imagens } = this.props;
      imagens.map( item => (
          this.setState({ 
            images : [...this.state.images, ({ original: item.Link, thumbnail: item.Link })]
          }) 
        )
      )
    }
    render(){
    return (
      <>
      {console.log(this.state.images)}
        <ImageGallery 
          items={this.state.images}
        />
      </>
    );
  }
}
