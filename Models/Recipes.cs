using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Doyou2.Models
{
    public enum Categories { DESSERT, MEAT, FISH, APPETIZER}

    public enum Difficulties { EASY, NORMAL, HARD}
    public class Recipes
    {
        [Key] 
        public Guid Id { get; set; }

        [Required]
        [MaxLength(255), MinLength(5)]
        public string? Name { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public Categories Category {  get; set; }

        [Required]
        public Difficulties Difficulty { get; set; }

        [Required]
        public string? Duration { get; set; }

        [Required]
        public bool Deleted { get; set; } = false;

        
        public bool Approved { get; set; } = false;

        private int _total_reviews = 0;
        public int Total_reviews {
            get { return _total_reviews; }
            set { _total_reviews += 1; }
        }

        public int Total_value_reviews { get; set; }

        [Required]
        public virtual ApplicationUser? User { get; set; }

        [Required]
        public virtual ICollection<Ingredients> Ingredients { get; } = new List<Ingredients>();

        public virtual ICollection<Favorites>? Favorites { get; set; }

        [NotMapped]
        public double AverageRating
        {
            get
            {
                if (Total_reviews > 0)
                {
                    return Total_value_reviews / Total_reviews;
                }
                else
                {
                    return 0;
                }

            }
        }
    }
}
