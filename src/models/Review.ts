export type ReviewId = string;

export interface Review {
  id: ReviewId;
  name: string;
  text: string;
  rating: number;
}
