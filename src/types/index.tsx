export type FoodType = {
  name: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
};

export type MealType = {
  name: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  foods: FoodType[];
};

export type DayType = {
  date: string;
  totalCalories: number;
  caloriesGoal: number;
  proteins: number;
  proteinsGoal: number;
  carbs: number;
  carbsGoal: number;
  fats: number;
  fatsGoal: number;
  meals: MealType[];
};
