BucketItemReact = React.createClass({

	propTypes: {
		bucketitem: React.PropTypes.object.isRequired
	},

	getInitialState() {
		return {
			title: this.props.bucketitem.title,
			description: this.props.bucketitem.description,
			tags: this.props.bucketitem.tags,
			category: this.props.bucketitem.category,
			address: this.props.bucketitem.address,
			rating: this.props.bucketitem.rating,
			editing: false,
			showDescription: false,
			showAll: false
		};
	},

	toggleChecked() {
		BucketItemsCollection.update(this.props.bucketitem._id, {
			$set: {checked: ! this.props.bucketitem.checked}
		})
	},

	toggleShowAll(event) {
		this.setState({showAll: !this.state.showAll})
	},

	toggleDescription(event){
		this.setState({showDescription: !this.state.showDescription})
	},

	showBucketItemDetails(){
		var currentItem = BucketItemsCollection.find(this.bucketitem._id)
	},

	selectThisListItem(){
		$("#"+this.props.bucketitem._id).addClass("selected")
	},

	updateThisBucketItem(event) {
		event.preventDefault();
		var newtitle = this.state.title.trim();
		var newdescription = this.state.description.trim();
		var newtags = this.state.tags.trim();
		var newcategory = this.state.category.trim();
		var newaddress = this.state.address.trim();
		var newrating = this.state.rating.trim();
		BucketItemsCollection.update(this.props.bucketitem._id, {
			title: newtitle,
			description: newdescription,
			tags: newtags,
			category: newcategory,
			address: newaddress,
			rating: newrating,
		})
	},

	deleteThisBucketItem() {
		BucketItemsCollection.remove(this.props.bucketitem._id);
	},

	handleTitleChange(event){
		this.setState({title: event.target.value})
	},

	handleDescriptionChange(event){
		this.setState({description: event.target.value})
	},

	handleTagsChange(event){
		this.setState({tags: event.target.value})
	},

	handleCategoryChange(event){
		this.setState({category: event.target.value})
	},

	handleAddressChange(event){
		this.setState({address: event.target.value})
	},

	handleRatingChange(event){
		this.setState({rating: event.target.value})
	},

	openForm(event){
		this.setState({editing: true})
	},

	closeForm(event) {
		this.setState({editing: false})
	},

	



	render() {
		const itemClassName = this.props.bucketitem.checked ? "checked" : "";
		return (
			<li id={this.props.bucketitem._id}>
				<button className="delete" onClick={this.deleteThisBucketItem}>
					&times;
				</button>
				<button onClick={this.openForm}>Edit this item</button>

				<div onClick={this.toggleDescription}>	
				<p className="title">{this.props.bucketitem.title}</p>
				</div>

				{(this.state.showDescription == true)
				?
					<div>
						<button onClick={this.toggleShowAll}>Show All Details</button>
						<ul>
							<li className="description">{this.props.bucketitem.description}</li>
						</ul>
					</div>
				:null
				}

				{(this.state.showDescription == true && this.state.showAll == true)
					? 
						<div>
							<ul>
								
								<li className="tags">{this.props.bucketitem.tags}</li>
								<li className="category">{this.props.bucketitem.category}</li>
								<li className="address">{this.props.bucketitem.address}</li>
								<li className="rating">{this.props.bucketitem.rating}</li>
							</ul>
						</div>
					
					:	null
					
				}
				{(this.state.editing == true)
					? <form className="editform" onSubmit={this.updateThisBucketItem}>
					<p> Title:
						<input
							type="text" 
							name="updatedText"
							placeholder="Please don't leave blank"
							onChange={this.handleTitleChange}
							defaultValue={this.props.bucketitem.title}
						/>
					</p>
	        <p>  
	          Description: 
            <input
              type="text"
              ref="description"
							onChange={this.handleDescriptionChange}
							defaultValue={this.props.bucketitem.description}
              placeholder="Define Description Here" />

          </p>
          <p>
          	Tags: 
            <input
              type="text"
              ref="tags"
              onChange={this.handleTagsChange}
							defaultValue={this.props.bucketitem.tags}
              placeholder="Define tags here" />
          </p>
            <p>Category: 
            <input
              type="text"
              ref="category"
              onChange={this.handleCategoryChange}
							defaultValue={this.props.bucketitem.category}
              placeholder="List Category Here" />
          </p>
            <p>Address: 
            <input
              type="text"
              ref="address"
              onChange={this.handleAddressChange}
							defaultValue={this.props.bucketitem.address}
              placeholder="Type Address Here" />
          </p>
            <p>Rating: 
            <input
              type="text"
              ref="rating"
              onChange={this.handleRatingChange}
							defaultValue={this.props.bucketitem.rating}
              placeholder="Rate the item" />
          </p>

						<input type="submit" value="Update This Item"/>
						<button className="stopediting" onClick={this.closeForm}>Close Edit Form</button>	
					</form>
					: null
				}
			</li>
		);
	}
});
