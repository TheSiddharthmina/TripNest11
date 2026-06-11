const Listing = require("../models/listing");
const Review = require("../models/review");

const listingsData = require("./advanceData/listings");
const reviewsData = require("./advanceData/reviews");

const { cloudinary } = require("../cloudConfig");


function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


async function seedListingsAndReviews(users) {
  console.log("🏠 Seeding listings & reviews...");

  // DEV ONLY cleanup
  await Listing.deleteMany({});
  await Review.deleteMany({});
  console.log("🧹 Old listings & reviews removed");

  const createdListings = [];

  for (let listingData of listingsData) {
    const listingReviews = [];

    const uploadResponse = await cloudinary.uploader.upload(
      listingData.imageUrl,
      { folder: "TripNest_DEV" }
    );

   
    const owner = getRandom(users);

    const listing = new Listing({
      title: listingData.title,
      description: listingData.description,
      price: listingData.price,
      category: listingData.category,
      location: listingData.location,
      country: listingData.country,
      geometry: listingData.geometry,
      owner: owner._id,
      image: {
        url: uploadResponse.secure_url,
        filename: uploadResponse.public_id,
      },
    });


    const reviewCount = getRandomInt(8, 12);

    const eligibleUsers = users.filter(
      user => user._id.toString() !== owner._id.toString()
    );

    const shuffledUsers = shuffleArray(eligibleUsers);

    const selectedReviewers = shuffledUsers.slice(
      0,
      Math.min(reviewCount, shuffledUsers.length)
    );

    for (let reviewer of selectedReviewers) {
      const reviewData = getRandom(reviewsData);

      const review = new Review({
        comment: reviewData.comment,
        rating: reviewData.rating,
        author: reviewer._id,
      });

      await review.save();
      listingReviews.push(review._id);
    }

    listing.reviews = listingReviews;

    await listing.save();
    createdListings.push(listing);

    console.log(`✅ Created listing: ${listing.title}`);
  }

  console.log(`🎉 ${createdListings.length} listings created`);
  return createdListings;
}

module.exports = seedListingsAndReviews;
