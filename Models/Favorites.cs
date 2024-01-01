using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    [PrimaryKey(nameof(RecipeID), nameof(UserId))]
    public class Favorites
<<<<<<< HEAD
    {
        public Guid Id { get; set; }
        public virtual required ApplicationUser User { get; set; }
=======
    {   
            public Guid RecipeID { get; set; }
>>>>>>> Backend-Add

            [DeleteBehavior(DeleteBehavior.NoAction)]
            public virtual Recipes Recipes { get; set; }

            public string UserId { get; set; }

            [DeleteBehavior(DeleteBehavior.NoAction)]
            public virtual ApplicationUser Users { get; set; }
    }
}
