using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Doyou2.Models
{
    [PrimaryKey(nameof(RecipeID), nameof(UserId))]
    public class Favorites
    {   
            public Guid RecipeID { get; set; }

            [DeleteBehavior(DeleteBehavior.NoAction)]
            public virtual Recipes Recipes { get; set; }

            public string UserId { get; set; }

            [DeleteBehavior(DeleteBehavior.NoAction)]
            public virtual ApplicationUser Users { get; set; }
    }
}
