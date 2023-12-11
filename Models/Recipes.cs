using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Doyou2.Models
{
    public enum Categories { Dessert, Meat, Fish, Appetizer}

    public enum Difficulties { Easy, Normal, Hard}
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

        public double Total_reviews { get; set; }

        public double Total_value_reviews { get; set; }

        public virtual ApplicationUser User { get; set; }  

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
