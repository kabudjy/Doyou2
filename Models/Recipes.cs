using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    public class Recipes
    {
        [Key] 
        public Guid Guid { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public string? Category {  get; set; }

        [Required]
        public string? Difficulty { get; set; }

        [Required]
        public string? Duration { get; set; }

        [Required]
        public bool Deleted { get; set; }

        
        public bool Aproved { get; set; } = false;

        public double Total_reviews { get; set; }

        public double Total_value_reviews { get; set; }
    }
}
