import csv
import os

def get_unique_customers(csv_file, first_name_column, last_name_column, email_column):
    """Extracts unique customers from a CSV file based on a combination of first name, last name, and email."""
    try:
        unique_customers = set()
        with open(csv_file, mode='r', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            for row in reader:
                # Combine first name, last name, and email as a unique identifier
                customer = (row[first_name_column].strip().lower(), 
                            row[last_name_column].strip().lower(), 
                            row[email_column].strip().lower())  # Normalize data
                unique_customers.add(customer)
        return unique_customers
    except FileNotFoundError:
        print(f"Error: File '{csv_file}' not found.")
        return set()
    except KeyError as e:
        print(f"Error: Column '{e}' not found in '{csv_file}'.")
        return set()

def compare_customers(file1, file2, first_name_column, last_name_column, email_column, output_file):
    """Compares two CSV files to find missing customers based on first name, last name, and email, and saves missing customers to a new CSV file."""
    customers1 = get_unique_customers(file1, first_name_column, last_name_column, email_column)
    customers2 = get_unique_customers(file2, first_name_column, last_name_column, email_column)

    missing_in_file2 = customers1 - customers2  # In file1 but not in file2

    # Display the counts
    print(f"\nTotal unique customers in {file1}: {len(customers1)}")
    print(f"Total unique customers in {file2}: {len(customers2)}")
    print(f"Customers in {file1} but missing in {file2}: {len(missing_in_file2)}")

    # Write missing customers to the output CSV file
    with open(output_file, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['First Name', 'Last Name', 'Email'])  # Write headers
        for customer in missing_in_file2:
            writer.writerow([customer[0], customer[1], customer[2]])

    print(f"Missing customers have been saved to {output_file}")

# Check the current working directory
print("Current working directory:", os.getcwd())

# Example usage
file1 = "/Users/priscillavalverdealvarez/Desktop/wdd231/csv/cinch_billtos.csv"  # Full path to the Billtos file
file2 = "/Users/priscillavalverdealvarez/Desktop/wdd231/csv/allcustomers.csv"  # Full path to the All Customers file
first_name_column = "customer.first_name"  # Column name for first name
last_name_column = "customer.last_name"    # Column name for last name
email_column = "customer.email"            # Column name for email
output_file = "/Users/priscillavalverdealvarez/Desktop/wdd231/missing_customers.csv"  # Path to save the output CSV

compare_customers(file1, file2, first_name_column, last_name_column, email_column, output_file)
