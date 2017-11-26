import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Grid from 'material-ui/Grid';
import ExamCard from '../ExamCard/ExamCard'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 24,
    paddingBottom: 24,
    background: grey[900]
  }),
  card: {
    maxWidth: 300,
  },
  media: {
    height: 200,
  },
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  title: {
    marginBottom: 10
  }

});

class Results extends Component {

  listExams = this.props.exams.map((exam) => {
    return (
      <Grid item m={3}>
        <ExamCard exam={exam} />
      </Grid>
    )
  });

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography className={this.props.classes.title} type="display1" component="h1">
          Resultados
        </Typography>
        <Grid container justify="center" alignItems="left">
          {this.listExams}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  exams: state.homeReducer.exams
});

Results = connect(mapStateToProps, {})(Results);

export default withStyles(styles)(Results);