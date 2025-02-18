from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2
import traceback

app = Flask(__name__)
CORS(app)


@app.route('/extract-text', methods=['POST'])
def extract_text_from_pdf():
    try:
        # Instead of getting the JSON body, handle the file from the form-data
        if 'file' not in request.files:
            return jsonify({"error": "No file part"}), 400

        file = request.files['file']
        
        # Check if the uploaded file is a PDF
        if file and file.filename.lower().endswith('.pdf'):
            # Read the file using PyPDF2
            pdf_reader = PyPDF2.PdfReader(file)
            extracted_text = ""

            # Extract text from each page
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                extracted_text += page.extract_text()
            
            extracted_text = extracted_text.replace("\n", " ")
        
        # Check if the uploaded file is a Word document
        # elif file and file.filename.lower().endswith('.docx'):
        #     doc = docx.Document(file)
        #     extracted_text = " ".join([para.text for para in doc.paragraphs])

        else:
            raise Exception("Unsupported file type. Please upload a PDF or Word document.")

        return jsonify({
            "message": "File analyzed successfully",
            "text": extracted_text
        }), 200
        
    except Exception as error:
        print(f"An error occurred: {str(error)}")
        return jsonify({"error": traceback.format_exc()}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
