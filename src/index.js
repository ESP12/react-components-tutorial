import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

 const App = () => {
 	return(
		<div className="ui container comments">
			<ApprovalCard>
				Are you sure?
			</ApprovalCard>
			<ApprovalCard >
				<CommentDetail 
					author={faker.name.firstName() + " " + faker.name.lastName()} 
					timeAgo="Today" 
					thumbnail={faker.image.avatar()}
					content={faker.lorem.text()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName() + " " + faker.name.lastName()} 
					timeAgo="Yesterday" 
					thumbnail={faker.image.avatar()}
					content={faker.lorem.text()}
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author={faker.name.firstName() + " " + faker.name.lastName()} 
					timeAgo="Last Week"
					thumbnail={faker.image.avatar()}
					content={faker.lorem.text()}
				/>
			</ApprovalCard>
					
		</div>
 	)
 }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
