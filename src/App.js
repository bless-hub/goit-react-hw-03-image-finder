import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";

import style from "./App.module.css";

import fetchImg from "./api/api";

export default class App extends Component {
  state = {
    visibleImages: [],
    searchQuery: "",
    page: 1,
    largeImage: null,
    isLoading: false,
    openModal: null,
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (this.state.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });
    fetchImg
      .fetchImg(searchQuery, page)
      .then((visibleImages) =>
        this.setState((prevState) => ({
          visibleImages: [...prevState.visibleImages, ...visibleImages],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSerarchQueryForm = (query) => {
    this.setState({ searchQuery: query, page: 1, visibleImages: [] });
  };

  toggleLoading = () => {
    this.setState(({ isLoading }) => ({ isLoading: !isLoading }));
  };

  render() {
    const { visibleImages, isLoading } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleSerarchQueryForm} />
        <ImageGallery
          images={visibleImages}
          // onClick={this.toggleModal}
          // onItemClick={this.modalContentSet}
        />
        {isLoading && (
          <div className="Loader">
            <Loader />
          </div>
        )}
        {visibleImages.length > 0 && !isLoading && (
          <Button loadMore={this.fetchImages} />
        )}
      </div>
    );
  }
}
