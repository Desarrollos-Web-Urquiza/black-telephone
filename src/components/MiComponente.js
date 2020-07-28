import React from 'react';

import {Link} from 'react-router-dom';

import MiComponente2 from './MiComponente2';
import SimpleCard  from './card.js'

import Background from '../img/D70.jpg';
import ExcelLogo from '../img/Excel.png';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple, grey } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import  MONTH  from '../redux/actions/month';
import  SHOW  from '../redux/actions/show';

import { connect } from 'react-redux';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    disable: true,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const CardSelect = withStyles((theme) => ({
  root: {

    backgroundColor: grey[100],

    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}))(Card);

class MiComponente extends React.Component{
	
	constructor(props) {
    	
    	super(props);
	    
	    this.state ={ mes: 'Junio 2020' }

	    this.cambioMes = this.cambioMes.bind(this);
	
	}

	exportTableToExcel(tableID, filename = ''){
	    
	    var downloadLink;
	    var dataType = 'application/vnd.ms-excel';
	    var tableSelect = document.getElementById(tableID);
	    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
	    //Acentos
	    var tableHTML = tableHTML.replace(/ñ/g, '&ntilde');
	    var tableHTML = tableHTML.replace(/í/g, '&iacute');
	    var tableHTML = tableHTML.replace(/ó/g, '&oacute');
	    var tableHTML = tableHTML.replace(/á/g, '&aacute');
	    var tableHTML = tableHTML.replace(/é/g, '&eacute');
	    var tableHTML = tableHTML.replace(/ú/g, '&uacute');
	    
	    // Specify file name
	    filename = filename?filename+'.xls':'excel_data.xls';
	    
	    // Create download link element
	    downloadLink = document.createElement("a");
	    
	    document.body.appendChild(downloadLink);
	    
	    if(navigator.msSaveOrOpenBlob){
	        var blob = new Blob(['\ufeff', tableHTML], {
	            type: dataType
	        });
	        navigator.msSaveOrOpenBlob( blob, filename);
	    }else{
	        // Create a link to the file
	        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
	    
	        // Setting the file name
	        downloadLink.download = filename;
	        
	        //triggering the function
	        downloadLink.click();
	    }
	}	

	render() {

		console.log(this.state.mes)

		this.props.MONTH(this.state.mes)

		console.log(this.props.reducidor)
		
		return(
			<div  
			// style={{
	
		   //     backgroundImage: `url(${Background})`,   
		   //     height: `100%`,
		   //     width: `100%`,

		   //   }}
      		>
				<h1 align="center" style={{marginLeft: 5}}>INFORMES DE TRABAJO DE EMPLEADOS DE "BLACK TELEPHONE"</h1>
				<div align="center" >
					<div className="card-container">
	               		<CardSelect className="cardSelect">
							<h2 align="center">¿Qué mes desea ver?</h2>
		
							<select value={this.state.mes} onChange={this.cambioMes} style={{height: 40, padding: 10}} >
						
								<option>Mayo 2020</option>		
								<option>Junio 2020</option>		
							
							</select>

							<br />
							<br />

				        	{ this.props.show && <ColorButton variant="contained" color="primary"  onClick= { () => this.exportTableToExcel("tblData", 'Informes Black Telephone - ' + this.state.mes )   } >
				                
				            	Descargar mes en Excel  {/*<i class="far fa-file-excel fa-3x" style={{marginLeft: 10}}></i>*/}	
				                 
				        		<img src={ExcelLogo} alt="Excel" style={{marginLeft: 10,}}  /> 
				        	
				        	</ColorButton> }
				
					        <br />
					        <br />
					
						</CardSelect>
	            	</div>		
				</div>
      			
				<SimpleCard  properties={this.props} month={this.state.mes}/> 
				
			</div>
			
		)

	}

	cambioMes(e) {
	    
	    this.setState({
	      mes: e.target.value
	    })
	    
	    console.log(e.target.value)

 	}

}

const mapStateToProps = (state) =>{

	return {

		reducidor: state.month,	
		show: state.show	
		
	}
}      

const mapDispatchToProps = {

	MONTH,
	SHOW

}

export default connect(mapStateToProps, mapDispatchToProps)(MiComponente);