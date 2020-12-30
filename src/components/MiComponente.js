import React from 'react';

import { motion } from "framer-motion";

import MiComponente2 from './MiComponente2';
import SimpleCard  from './card.js'
import TopBar from './topBar'
import Drawer from './drawer'
import Footer from './footer';
import Screen from './Screen'

import ExcelLogo from '../img/Excel.png';

import { withStyles } from '@material-ui/core/styles';
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

    backgroundColor: grey[50],

    '&:hover': {
      backgroundColor: grey[50],
    },
  },
}))(Card);

class MiComponente extends React.Component{
	
	constructor(props) {
    	super(props);
	    
	    this.state ={ mes: 'Junio 2020', handleDrawerOpen: false }

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

	handleDrawerOpen (esto) {


		// esto.state.handleDrawerOpen = !esto.state.handleDrawerOpen
		console.log(esto.state.handleDrawerOpen)

		esto.setState({handleDrawerOpen: true})

	}

	handleDrawerClose (esto) {


		// esto.state.handleDrawerOpen = !esto.state.handleDrawerOpen
		console.log(esto.state.handleDrawerOpen)

		esto.setState({handleDrawerOpen: false})

	}
		
	render() {

		console.log(this.state.mes)

		this.props.MONTH(this.state.mes)

		console.log(this.props.reducidor)

		console.log(this.props.history)
		
		return(

			<div>

				{console.log( this.state.handleDrawerOpen )}
				
				<TopBar
				
				page={"home"} 
				onOpenDrawer={ () => this.handleDrawerOpen(this)}
				history={this.props.history}

				/>
				
				{console.log("estado " + this.state.handleDrawerOpen)}
				
				<Drawer

					onClose={() => this.handleDrawerClose(this)}
					open={this.state.handleDrawerOpen}
					history={this.props.history}
				/>

				<h2 align="center" style={{marginLeft: 5}} style={{marginTop: 90 }} > TRABAJO DE EMPLEADOS DE "BLACK TELEPHONE"</h2>
				
				<div align="center" >
					
					<div className="card-container">
					
						<CardSelect className="cardSelect">
					
							<h3 align="center">¿Qué mes desea ver?</h3>
		
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

				<Footer properties={this.props}/>	
				
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