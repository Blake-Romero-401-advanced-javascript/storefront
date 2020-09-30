import React from 'react';import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { changeCategory } from '../store/products';


const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {  

  const classes = useStyles();  
  
  return (
    <div className={classes.categories}>
      {console.log('props', props)}
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {props.categories.categories.map(cat =>
          <Button
            key={cat._id}
            color="primary"
            onClick={() => props.changeCategory(cat.name)}
          >
            {cat.displayName || cat.name}
          </Button>
        )}
      </ButtonGroup>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   categories: {
//     margin: theme.spacing(3),
//   },
// }));

// const Categories = props => { 
//   return (
//     <div className={props.categories}>
//       {console.log(props)}
//       <Typography variant="h5">Browse our Categories</Typography>
//       <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
//         {props.categories.categories.map(cat =>
//           <Button
//             key={cat._id}
//             color="primary"
//             onClick={() => props.category(cat.name)}
//           >
//             {cat.displayName || cat.name}
//           </Button>
//         )}
//       </ButtonGroup>
//     </div>
//   )
// }

const mapStateToProps = state => {
  return {
    categories: state.products,
    changeCategory,
  }
}

const mapDispatchToProps = { changeCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);