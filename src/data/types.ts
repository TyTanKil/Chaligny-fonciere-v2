export type DescriptionItem =
  | { type: "text"; content: string }
  | { type: "highlight"; content: string }
  | { type: "highlightGreen"; content: string }
  | { type: "lineBreak" };

export type Member = {
  id: number;
  name: string;
  role: string;
  description: DescriptionItem[];
  image: string;
};
