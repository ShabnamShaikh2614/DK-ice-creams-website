import React, { useState } from 'react';
import { Review } from '../types';
import { INITIAL_REVIEWS } from '../data/landmarksData';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [favoriteItem, setFavoriteItem] = useState('DK Special Royal Falooda');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      location: authorLocation.trim() || 'Solapur',
      rating,
      date: 'Just now',
      comment: comment.trim(),
      favoriteItem: favoriteItem.trim() || 'DK Special Royal Falooda'
    };

    setReviews([newReview, ...reviews]);
    setSubmittedNotice(true);
    setAuthorName('');
    setAuthorLocation('');
    setComment('');
    setTimeout(() => {
      setSubmittedNotice(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white/70 border-b border-pink-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-pink-200/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-pink-600 uppercase tracking-wider">
              <span className="bg-pink-100 px-2 py-0.5 rounded-full">Customer Satisfaction</span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-700">Solapur Community Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-display mt-1.5">
              Loved by Solapur Locals
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
              Authentic feedback from families, college students, and daily commuters on Hotgi Road and Asra Chowk.
            </p>
          </div>

          <button
            onClick={() => setShowForm(prev => !prev)}
            className="px-5 py-2.5 bg-gradient-to-r from-pink-500 to-sky-500 text-white text-xs sm:text-sm font-bold rounded-xl hover:from-pink-600 hover:to-sky-600 transition-all shadow-md shadow-pink-200 flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{showForm ? 'Cancel Review' : 'Share Your Experience'}</span>
          </button>
        </div>

        {/* Rating Breakdown Strip */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Main Score Box */}
          <div className="md:col-span-4 p-6 bg-gradient-to-br from-pink-50 via-white to-sky-50 rounded-2xl border-2 border-pink-100 shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-4xl sm:text-5xl font-extrabold text-pink-600 font-mono tabular-nums">4.2</span>
            <div className="flex items-center gap-1 my-2 text-pink-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-pink-400' : 'fill-pink-100'}`} />
              ))}
            </div>
            <span className="text-xs text-stone-500">Based on 37+ ratings across Justdial &amp; Google</span>
            <span className="text-[11px] font-bold text-sky-700 mt-1 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
              94% Recommended in Asra Chowk
            </span>
          </div>

          {/* Sub-ratings Bars */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-2xs">
              <div className="flex justify-between text-xs font-bold text-stone-800">
                <span>Falooda &amp; Mastani Taste</span>
                <span className="font-mono tabular-nums text-pink-600">4.8 / 5</span>
              </div>
              <div className="w-full bg-pink-100 h-2.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-full rounded-full" style={{ width: '96%' }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs">
              <div className="flex justify-between text-xs font-bold text-stone-800">
                <span>Fresh Fruit Juice Quality</span>
                <span className="font-mono tabular-nums text-sky-600">4.6 / 5</span>
              </div>
              <div className="w-full bg-sky-100 h-2.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{ width: '92%' }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-pink-100 shadow-2xs">
              <div className="flex justify-between text-xs font-bold text-stone-800">
                <span>Value For Money</span>
                <span className="font-mono tabular-nums text-pink-600">4.5 / 5</span>
              </div>
              <div className="w-full bg-pink-100 h-2.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-full rounded-full" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-sky-100 shadow-2xs">
              <div className="flex justify-between text-xs font-bold text-stone-800">
                <span>Service Speed &amp; Cleanliness</span>
                <span className="font-mono tabular-nums text-sky-600">4.3 / 5</span>
              </div>
              <div className="w-full bg-sky-100 h-2.5 rounded-full mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full" style={{ width: '86%' }} />
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Add Review Form */}
        {showForm && (
          <form 
            onSubmit={handleSubmitReview}
            className="mb-10 p-6 bg-white rounded-xl border border-stone-300 shadow-sm space-y-4 max-w-2xl mx-auto"
          >
            <h3 className="text-base font-bold text-stone-900 font-display">
              Add Your Review for DK Ice Cream &amp; Juice Center
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={e => setAuthorName(e.target.value)}
                  placeholder="e.g. Anand Deshpande"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Your Solapur Area</label>
                <input
                  type="text"
                  value={authorLocation}
                  onChange={e => setAuthorLocation(e.target.value)}
                  placeholder="e.g. Asra Chowk / Jule Solapur"
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Rating</label>
                <div className="flex items-center gap-1.5 pt-1">
                  {[1, 2, 3, 4, 5].map(starNum => (
                    <button
                      key={starNum}
                      type="button"
                      onClick={() => setRating(starNum)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          starNum <= rating
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono ml-2 font-bold text-stone-700">{rating} / 5</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Favorite Item</label>
                <select
                  value={favoriteItem}
                  onChange={e => setFavoriteItem(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                >
                  <option value="DK Special Royal Falooda">DK Special Royal Falooda</option>
                  <option value="Rabdi Kulfi Falooda">Rabdi Kulfi Falooda</option>
                  <option value="Solapur Special Mango Mastani">Solapur Special Mango Mastani</option>
                  <option value="Fresh Mosambi Juice">Fresh Mosambi Juice</option>
                  <option value="Pure Pomegranate Juice">Pure Pomegranate Juice</option>
                  <option value="Royal Rajbhog Ice Cream">Royal Rajbhog Ice Cream</option>
                  <option value="DK Special Malai Lassi">DK Special Malai Lassi</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Your Review *</label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Tell us what you liked about our juice, falooda, or service..."
                className="w-full p-3 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-stone-500">Reviews are moderated and posted instantly.</span>
              <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-sky-500 text-white text-xs font-bold rounded-xl hover:from-pink-600 hover:to-sky-600 active:scale-95 transition-all shadow-md shadow-pink-200"
              >
                Submit Review
              </button>
            </div>

            {submittedNotice && (
              <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl flex items-center gap-2 border border-emerald-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Thank you! Your sweet review has been added.</span>
              </div>
            )}
          </form>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(rev => (
            <div
              key={rev.id}
              className="p-5 bg-white/95 rounded-2xl border-2 border-pink-100 hover:border-sky-300 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div>
                
                {/* Review Header */}
                <div className="flex items-center justify-between pb-3 border-b border-pink-100/60 text-xs text-stone-500">
                  <div className="flex items-center gap-1 text-pink-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'fill-pink-400' : 'text-pink-100'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-stone-400">{rev.date}</span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-stone-700 mt-3 leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                {/* Favorite Item Mention */}
                <div className="mt-3 pt-2 text-[11px] text-pink-700 flex items-center gap-1 font-bold">
                  <ThumbsUp className="w-3 h-3 text-pink-500" />
                  <span>Favorite: {rev.favoriteItem}</span>
                </div>

              </div>

              {/* Author & Location */}
              <div className="mt-4 pt-3 border-t border-pink-100/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-stone-900 block">{rev.author}</span>
                  <span className="text-sky-600 text-[11px] font-medium">{rev.location}</span>
                </div>
                <span className="text-[10px] text-pink-600 bg-pink-50 px-2 py-0.5 rounded-full font-bold">Verified Solapur Patron</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
